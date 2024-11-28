import "./MainBlock.scss";
import MyPhoto from './MyPhoto/MyPhoto.tsx';
import Quote from './Quote/Quote.tsx';

export default function MainBlock() {
    return (
            <main className="main-container">
                <MyPhoto />
                <Quote />
            </main>    
    );
}