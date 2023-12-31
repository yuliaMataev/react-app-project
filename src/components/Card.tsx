import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import Like from "./Like";
import Trash from "./Trash";

interface Props {
  _id: string;
  title: string;
  subTitle: string;
  address: string;
  phone: string;
  image: string;
  bizNumber: string;
  user_id: string;
}

function Card({
  _id,
  title,
  subTitle,
  address,
  phone,
  image,
  bizNumber,
  user_id,
}: Props) {
  const context = useContext(AppContext);

  if (!context) {
    return <div>Error</div>;
  }
  const signInUserId = context.user_id;

  let isCurrentUser: boolean = false;
  if (user_id === signInUserId) {
    isCurrentUser = true;
  }

  return (
    <div className={context.cardsDisplayMode}>
      <div className="card shadow p-1 mb-3 bg-body-tertiary rounded">
        <img
          src={`${image}`}
          className="card-img-top rounded img-fluid img-thumbnail"
          alt={`Img ${title}`}
        />
        <div className="card-body">
          <h5 className="card-title text-start">{title}</h5>
          <span className="text-muted">{subTitle}</span>
          <hr />
          <p>
            <strong>Address: </strong>
            {address}
          </p>
          <p>
            <strong>Phone: </strong>
            {phone}
          </p>
          <p>
            <strong>Card Number: </strong>
            {bizNumber}
          </p>
          <hr />
          <div className="d-flex justify-content-evenly">
            {signInUserId.length === 0 && (
              <div className="text-info">Signin for details...</div>
            )}
            {signInUserId.length > 0 && (
              <>
                <Link to={`/card/${_id}`} className="btn btn-default">
                  <i className="bi bi-ticket-detailed"></i>
                </Link>
                <Like card_id={_id} />
              </>
            )}
            {isCurrentUser && (
              <>
                <Link to={`/edit/${_id}`} className="btn btn-default">
                  <i className="bi bi-pen"></i>
                </Link>
                <Trash card_id={_id} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
