import './header.css'

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="text-4xl font-bold">
                <h3>Knowledge Cafe</h3>
            </div>
            <img src="images/profile.png" alt="" />
        </div>
    );
};

export default Header;