import './navbar.css'

export const Navbar = () => {
    return (
        <>
           <nav>
               <div>
                   <h1>My Navbar</h1>
               </div>
               <div>
                   <form action="">
                       <input type="text" placeholder="Search Item Here" />
                       <button>Submit</button>
                   </form>
               </div>
               <div className='butn'>
                   <button>Login</button>
                   <button>Cart</button>
               </div>
           </nav>
        </>
    )
}