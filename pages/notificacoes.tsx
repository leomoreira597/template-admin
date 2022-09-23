import Layout from "../components/template/Layout";
import useAppData from "../data/hooks/useAppData";

export default function Notificacoes(props){

    const dados = useAppData()

    return(
        <Layout titulo="Notificações" subtitulo="Aqui será as notificações">
            <h3>{dados.nome}</h3>
        </Layout>
    );
}