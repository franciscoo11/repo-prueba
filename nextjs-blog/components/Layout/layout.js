import Link from 'next/link'

const layout = ()=>{
    return(
        <div>
           <Link href="/about">about</Link>
           <br/>
           <br/>
           <Link href="/home">home</Link>
           <br/>
           <br/>
           <Link href="/">inicio</Link>
        </div>
    )
}

export default layout;