const Banner = ({products}) => {
    return (
        <div>
            <h2>Banner</h2>
            {
            products.map((item) => {
                return (
                    <div>
                        <h3>{item.name}</h3>
                        <image src={item.imageUrl}/>
                    </div>
                );
            })}
        </div>
    );
};
export default Banner;