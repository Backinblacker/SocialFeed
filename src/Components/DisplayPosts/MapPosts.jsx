import DisplayPosts from "./DisplayPosts";

const MapPosts = (props) => {
    return (
        <div>
            {props.entries.map((entry, index) => <DisplayPosts entry={entry} key= {index}/>)
            .reverse()};
        </div>
    );
};
export default MapPosts;