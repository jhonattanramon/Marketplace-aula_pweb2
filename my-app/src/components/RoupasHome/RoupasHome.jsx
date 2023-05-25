import "./roupas.css";
import { useLocation } from "react-router-dom";

const RoupasHome = ({
  
  onAddFavoritos,
  onAddDenuncia,
  PropFavoritos,
}) => {


    const locationRh = useLocation();

    console.log(locationRh);

return (

    <div>teste</div>
    
);
};

export default RoupasHome;