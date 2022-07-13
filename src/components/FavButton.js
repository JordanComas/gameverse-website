import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";

const FavButton = (props) => {
  const [fav, setFav] = React.useState(props.isFav);

  const navigate = useNavigate();

  const navigateCreate = () => {
    let fav = localStorage.getItem("Favorites");
    if (!fav) {
      fav = [];
    } else {
      fav = JSON.parse(fav);
    }

    fav.push(props.game);
    localStorage.setItem("Favorites", JSON.stringify(fav));

    // navigate("/favorites");
  };

  const check = () => {
    console.log("checking", props.game);
    navigateCreate();
  };

  return (
    <div>
      {fav && (
        <IconButton
          onClick={() => {
            // check();
            setFav(!fav);
          }}
          aria-label="delete"
          color="secondary"
        >
          <Favorite></Favorite>
        </IconButton>
      )}
      {!fav && (
        <IconButton
          onClick={() => {
            check();
            setFav(!fav);
          }}
          aria-label="delete"
          color="primary"
        >
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </IconButton>
      )}
    </div>
  );
};

export default FavButton;
