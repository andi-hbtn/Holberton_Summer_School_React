import { useGameContext } from '../../../context/Game';

const AllGames = () => {

    const { games } = useGameContext();


    // console.log("games-----", games);


    return (
        <>
            {
                games.map((el, index) => {
                    console.log("games-----", el.image);
                    return (
                        <div key={index}>
                            <h4>Admin</h4>
                            <img src={"http://localhost:3000/api/games/uploads/"+el.image}  width={"150px"} height={"150px"} alt="some text"/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllGames