import { OffersList } from "../../types/offer";
import { FavoritesCard } from "../favorite-card/favorite-card";

type FavoritesCardListProps ={
    offersList: OffersList[];
};

function FavoritesCardList({offersList}: FavoritesCardListProps){
    return(
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offersList, (item) =>
            <FavoritesCard key={item.id} id={item.id} title={item.title} type={item.type} price={item.price}
            previewImage={item.previewImage} isPremium={item.isPremium} rating={item.rating} />)}
        </div>
    );
}

export {FavoritesCardList};