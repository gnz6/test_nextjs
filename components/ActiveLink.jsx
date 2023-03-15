import Link from "next/link"
import { useRouter } from "next/router"

const style = {
    color: "#fff000",
    textDecoration: "underline",
}

export const ActiveLink = ({text, href}) => {

    const router = useRouter();


  return (
    <a  style={ router.asPath === href ?  style : null }>

    <Link href={href}>
        {text} 
    </Link>
    </a>
  )
}
