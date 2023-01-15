function Bio ({user}) {
    if (user.bio === null) {
        return null;
    } else{
        return (
        <p>{user.bio}</p>
    )}
    
       
}

export default Bio;