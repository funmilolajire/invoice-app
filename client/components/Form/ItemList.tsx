import { FC, Fragment } from 'react';
import styles from './styles/ItemList.module.css';
import TextInput from './TextInput';
import { MdDelete } from 'react-icons/md'

const ItemList: FC<ItemsListProps> = ({ items, push, handleChange, setFieldValue, remove }) => {
    return (
        <div className={styles.container}>
            <h3>Item List</h3>
            <div className={styles.itemsDiv}>
                <label className={styles.name} htmlFor="itemName">Item Name</label>
                <label className={styles.quantity} htmlFor="itemQuantity">Qty.</label>
                <label className={styles.price} htmlFor="itemPrice">Price</label>
                <label className={styles.total} htmlFor="itemTotal">Total</label>
                {items && items.length > 0 && items.map((item, index) => (
                    <Fragment key={index}>
                        <div className={styles.name}>
                            <TextInput
                                id="itemName"
                                name={`items[${index}].name`}
                                label="Item Name"
                                type="text"
                            />
                        </div>
                        <div className={styles.quantity}>
                            <TextInput
                                id="itemQuantity"
                                name={`items[${index}].quantity`}
                                label="Qty."
                                type=""
                                placeholder="0"
                                min={0}
                                onChange={(e: any) => {
                                    let total = items[index].price * items[index].quantity
                                    handleChange(e)
                                    setFieldValue && setFieldValue(`items[${index}].total`, total)
                                }}
                            />
                        </div>
                        <div className={styles.price}>
                            <TextInput
                                id="itemPrice"
                                name={`items[${index}].price`}
                                label="Price"
                                type=""
                                placeholder="0.00"
                                step={0.01}
                                min={0}
                                onChange={(e: any) => {
                                    let total = items[index].price * items[index].quantity
                                    handleChange(e)
                                    setFieldValue && setFieldValue(`items[${index}].total`, total)
                                }}
                            />
                        </div>
                        <div className={styles.total}>
                            <TextInput
                                id="itemTotal"
                                name={`items[${index}].total`}
                                label="Total"
                                type="hidden"
                                value={items[index].price * items[index].quantity}
                                onChange={(e: any) => {
                                    let total = items[index].price * items[index].quantity
                                    handleChange(e)
                                    setFieldValue && setFieldValue(`items[${index}].total`, total)
                                }}
                            />
                            <span>{(items[index].price * items[index].quantity).toFixed(2)}</span>
                        </div>
                        <div className={styles.deleteIcon}>
                            <span onClick={() => remove(index)} className={styles.iconSpan}><MdDelete /></span>
                        </div>
                    </Fragment>))
                }
            </div>
            <button className={styles.addNewItem} onClick={() => push({ name: "", quantity: "", price: "", total: "" })} type="button">+ Add New Item</button>
        </div>
    )
}

export default ItemList
