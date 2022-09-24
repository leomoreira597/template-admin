import Layout from "../components/template/Layout";
import useAppData from "../data/hooks/useAppData";

export default function Notificacoes(props){

    const {alternarTema} = useAppData()

    return(
        <Layout titulo="Notificações" subtitulo="Aqui será as notificações">
            <button onClick={alternarTema}>Alternar tema </button>
        </Layout>
    );
}