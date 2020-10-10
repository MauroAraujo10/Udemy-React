import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions';
import { MdDelete, MdAddCircle, MdRemoveCircle, MdRemove } from 'react-icons/md';
import './style.css';

export default function Reservas() {
    const reserves = useSelector(state => state.reserve);
    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(removeReserve(id));
    }

    function decrementAmount(trip){
        dispatch(updateAmountReserve(trip.id, trip.amount - 1));
    }

    function incrementAmount(trip){
        dispatch(updateAmountReserve(trip.id, trip.amount + 1));
    }

    return (
        <div>
            <h1 className="title">
                {
                    reserves.length > 0 ?
                        `Você Solicitou ${reserves.length} reserva` :
                        'Você ainda não solicitou uma reserva'
                }
            </h1>

            {reserves.map(reserve => (
                <div className="reservas" key={reserve.id}>
                    <img
                        src={reserve.image}
                        alt={reserve.title}
                    />
                    <strong>{reserve.title}</strong>

                    <div id="amount">
                        <button 
                            type="button"
                            onClick={() => decrementAmount(reserve)}>
                            <MdRemoveCircle size={25} color="#191919"/>
                        </button>

                        <input 
                            type="text"
                            value={reserve.amount}
                            readOnly/>

                        <button 
                            type="button"
                            onClick={() => incrementAmount(reserve)}>
                            <MdAddCircle size={25} color="#191919"/>
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleDelete(reserve.id)}
                    >
                        <MdDelete size={20} color="#191919" />
                    </button>
                </div>
            ))}

            <footer>
                <button type="button">Solicitar Reservas</button>
            </footer>

        </div>
    );
}