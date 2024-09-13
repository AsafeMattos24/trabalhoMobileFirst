import "./Exercicio5.css"

export default function Exercicio5() {
    return (
        <div>
            <h2>Desenvolvimento Front-End com Frameworks</h2>
            <h3>Mobile-First UI com React</h3>
            <h4>Diferença entre responsividade e adaptabilidade</h4>
            <p>
                A responsividade refere-se à capacidade de uma interface de usuário ajustar-se a diferentes tamanhos de tela 
                sem perder sua funcionalidade ou estética. Uma interface responsiva utiliza pontos de interrupção e técnicas 
                como grid fluido, permitindo que os elementos se reorganizem conforme o espaço disponível.
            </p>
            <p>
                Já a adaptabilidade, por outro lado, envolve interfaces que podem ser ajustadas manualmente para cada 
                dispositivo ou contexto de uso. Isso significa que diferentes versões da mesma interface são projetadas para 
                diferentes dispositivos, como desktop, tablet e mobile, em vez de se adaptar automaticamente.
            </p>
            <p>
                Ambas as abordagens são usadas no desenvolvimento web moderno, mas a responsividade é mais comum, pois promove 
                uma manutenção de código mais simples e uma experiência de usuário mais consistente, independentemente do 
                dispositivo.
            </p>
        </div>
    );
}
