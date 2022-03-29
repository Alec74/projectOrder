import styles from '../../styles/singlePage.module.css';
import Image from 'next/image';
// import gameScore from '../../public/gameScore.png';

export default function singlepage() {
    // let fill = 'fill';
    return (
        <div className={`${styles.productContainer}`}>
            <div className={`${styles.img}`}>
                <Image
                    src="/gameScore.png"
                    width={400}
                    height={300}
                />
            </div>
            <div className={`${styles.centerText}`}>
                <h1 className={`${styles.productTitle}`}>Test</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mauris ac tellus aliquet consequat non non diam. Suspendisse potenti. Mauris eget magna euismod, dignissim est et, eleifend elit. Cras pulvinar aliquam diam et congue. Nulla facilisi. Sed tempor dui blandit aliquam facilisis. Etiam gravida ipsum id odio pulvinar scelerisque. Nunc mollis neque porta bibendum blandit. Suspendisse posuere nibh sem, ac blandit tortor fermentum in. Nam bibendum erat convallis, finibus ipsum sit amet, vehicula elit.

                    Phasellus at maximus lacus. Aenean pellentesque diam eros, vitae molestie ante pharetra consequat. Duis porttitor molestie ante, vitae rhoncus nunc luctus a. Proin tempor elit in ex pretium, id dictum mauris rhoncus. Curabitur ligula nibh, luctus at condimentum a, imperdiet maximus justo. Nulla facilisi. Curabitur urna felis, pulvinar et accumsan at, rhoncus sed quam. Nunc vel porttitor massa. Pellentesque scelerisque lorem tristique massa dignissim aliquet. Nam fringilla pretium quam sit amet aliquam. Pellentesque consectetur varius ipsum, in volutpat leo porta eu. Donec ipsum metus, mollis sit amet vehicula eget, malesuada non nisi.

                    </p>
            </div>
            <div>
                <ul>
                    <li>number 1</li>
                    <li>number 1</li>
                    <li>number 1</li>
                    <li>number 1</li>
                </ul>
            </div>
        </div>
    )
}