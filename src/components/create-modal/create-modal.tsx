import "./modal.css";
import { useEffect, useState } from 'react';
import { EventinhoData } from '../../interface/EventinhoData';
import { useEventinhoDataMutate } from '../../hooks/useEventinhoDataMutate';

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    );
};

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    
    const { mutate, isSuccess, status } = useEventinhoDataMutate();

    const submit = () => {
        const eventinhoData: EventinhoData = {
            title, 
            date,
            price,
            image
        };
        mutate(eventinhoData);
    };

    useEffect(() => {
        if (isSuccess) closeModal();
    }, [isSuccess, closeModal]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo evento</h2>
                <form className="input-container">
                    <Input label="titulo" value={title} updateValue={setTitle} />
                    <Input label="data" value={date} updateValue={setDate} />
                    <Input label="preço" value={price} updateValue={setPrice} />
                    <Input label="imagem" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {status === 'pending' ? 'enviando...' : 'enviar'}
                </button>
            </div>
        </div>
    );
}