import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
  BlogType,
  ConTextType,
  Products,
  ShoppingContextProviderProps,
} from "../Types/Product.type";

const Context = createContext<ConTextType>({} as ConTextType);

export const useDataContext = () => {
  return useContext(Context);
};

const ContextDatasProvider = ({ children }: ShoppingContextProviderProps) => {
  const [datas, setDatas] = useState<Products[]>([]);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchProducts = async (): Promise<Products[]> => {
      const data = await fetch("http://localhost:3000/product")
        .then((res) => {
          return res.json()
        })
        .catch((err) => {
          console.log("error=> ", err);
        });
      return data;
    };
    fetchProducts().then((datas) => setDatas(datas));
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blog");
        setBlogs(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Context.Provider value={{ datas, blogs }}>{children}</Context.Provider>
  );
};

export default ContextDatasProvider;
