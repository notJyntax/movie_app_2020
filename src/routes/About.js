import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about--container">
        <span>“I don’t like the idea of “understanding” a film. I don’t believe that rational understanding is an essential element in the reception of any work of art. Either a film has something to say to you or it hasn’t. If you are moved by it, you don’t need it explained to you. If not, no explanation can make you moved by it.”
</span>
        <span>― Federico Fellini</span>
        </div>
    )
}

export default About;