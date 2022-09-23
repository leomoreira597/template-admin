import MenuItem from "./MenuItem";
import { IconeCasa, IconeAjustes, IconeSino, IconeSair } from "../icons";
import Logo from "./Logo";

export default function MenuLateral(){
    return(
        <aside className={`flex flex-col `}>
            <div className={`flex flex-col items-center justify-center 
            h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`
            }>
                <Logo />
            </div>
            <ul className={` flex-grow`}>
                <MenuItem url="/" texto="Inicio" icone={IconeCasa}  />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem onClick={() => console.log('Saiu')} texto="Sair" icone={IconeSair} 
                className={`text-red-600 hover:bg-red-400 hover:text-white`} />
            </ul>
        </aside>
    );
}