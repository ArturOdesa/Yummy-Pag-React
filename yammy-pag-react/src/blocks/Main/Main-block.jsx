import ('./Main-block.css');

function MainBlock() {
  return (
    <main>
        <section class="sweeties" id="sweeties">
            <div class="main-container">
                <h2 class="sweeties-title"><span class="orange-text">мої улюбленні</span> солодощі</h2>
                <div class="sweeties-cards-holder">
                    <article class="sweeties-card">
                        <a href="#"><img src="./src/assets/images/sweeties-card-1.png" alt="Зображення цукерок 'Червоний Мак'" /></a>
                        <h3 class="sweeties-card-title">Червоний мак</h3>
                        <p class="sweeties-card-text">Пралене з додаванням карамельної крихти, пасти ядер горіхів фундука та мигдалюпокрите шоколадною глазурʼю</p>
                    </article>
                    <article class="sweeties-card">
                        <a href="#"><img src="./src/assets/images/sweeties-card-2.png" alt="Зображення цукерок 'Сливки-ленивки'" /></a>
                        <h3 class="sweeties-card-title">Сливки-ленивки</h3>
                        <p class="sweeties-card-text">Світлі вафельні листи, поєднані молочно-вершковою начинкою та покриті глазур’ю.</p>
                    </article>
                    <article class="sweeties-card">
                        <a href="#"><img src="./src/assets/images/sweeties-card-3.png" alt="Зображення цукерок 'Ліщина'" /></a>
                        <h3 class="sweeties-card-title">Ліщина</h3>
                        <p class="sweeties-card-text">Праліне з додаванням подрібненої та тертої ліщини та мигдалю, покрите шоколадною глазур’ю.</p>
                    </article>
                </div>
            </div>
        </section>
         <section class="hint" id="hint">
            <div class="main-container">
                <div class="hint-wrap">
                    <article class="hint-content">
                    <h2 class="hint-title"><span class="orange-text">Порада –</span> від Yummy</h2>
                    <p class="hint-text">З'ївши чергову шоколадку, ви не просто набираєте трохи додаткових калорій, але покращуєте тим самим роботу мозку, настрій і стаєте трішки добрішим. Вирішивши поласувати шоколадкою, віддавайте перевагу саме чорному шоколаду з високим вмістом какао-бобів. У цьому вигляді шоколаду менше жиру і цукру, ніж в молочному шоколаді, але зате магнію, кальцію, заліза, білка, антиоксидантів і вітамінів предостатньо.</p>
                    <h3 class="hint-list-title">Солодощі, які радить їсти Ямі:</h3>
                    <ul class="hint-list">
                        <li class="hint-list-item">Чорний шоколад</li>
                        <li class="hint-list-item">Зефір</li>
                        <li class="hint-list-item">Пастила</li>
                        <li class="hint-list-item">Мармелад</li>
                        <li class="hint-list-item">Мед</li>
                        <li class="hint-list-item">Халва</li>
                        <li class="hint-list-item">Цукати</li>
                    </ul>
                </article>
                </div>
            </div>
         </section>
    </main>
  );
}

export default MainBlock;