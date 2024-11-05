import Header from "@/components/organisms/Header/Header";

export default function PrivateLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <>
        <Header>
            <li><a href="/">Inicio</a></li>
            <li><a href="./login">Iniciar sesión</a></li>
        </Header>
        {children}
    </>
  )
}