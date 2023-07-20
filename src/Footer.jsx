const Footer=()=>{
    const year=new Date().getFullYear();
    console.log(year);
    return (
        <>
        <footer className="w-100 bg-light text-center">
            <p>©️ {year} OnlineCourses. All Rights Reserved | Terms and Condition.</p>
        </footer>
        
        </>
    );
}
export default Footer;

