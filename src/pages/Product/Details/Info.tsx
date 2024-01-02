import { Products } from '../../../Types/Product.type'

const Info = ({details}: {details: Products}) => {
    return (
        <div>
            {details.name}
        </div>
    )
}

export default Info
