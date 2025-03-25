const Friend = ({picture, pos}) => {
    let styles = "col-sm-4 p-1";

    if (pos === 7) {
        styles += " bottomLeft";
    }

    if (pos === 9) {
        styles += " bottomRight";
    }


    return (
        <div>
            <img className={styles} src={picture} alt="Friend"/>
        </div>
    );
};

export default Friend;