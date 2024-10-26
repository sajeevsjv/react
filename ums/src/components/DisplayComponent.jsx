export default function DisplayComponent ({displayData}){

    console.log("display component rendering ..");
    
    return(
        <>
        <h2>Name : {displayData.name} </h2>
        <h2>Email : {displayData.email} </h2>
        <h2>Place : {displayData.place} </h2>
        <h2>Pincode : {displayData.pincode} </h2>
        </>
    )

}