import { Menu } from './core/menu'
import { Module } from './core/module'
import {ShapeModule} from "./modules/shape.module";
// import {ClicksModule} from "@/modules/clicks.module";
// import {TimerModule} from "@/modules/timer.module";
// import {SoundModule} from "@/modules/sound.module";
// import {MessageModule} from "@/modules/message.module";
// imporimport { Menu } from './core/menu'
// import { Module } from './core/module'
// import {FigureManager} from "./modules/shape.module";
// import {ClicksModule} from "@/modules/clicks.module";
// import {TimerModule} from "@/modules/timer.module";
// import {SoundModule} from "@/modules/sound.module";
// import {MessageModule} from "@/modules/message.module";
// import {BackgroundModule} from "@/modules/background.module";


export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.modules = []
        this.menu = document.getElementById('menu');
        this.renderCommands(); // Создавайте пункты меню только один раз во время создания.

    }

    open() {
        this.menu.classList.add('open')
        this.menu.style.left = event.clientX + 'px';
        this.menu.style.top = event.clientY + 'px';
    }

    renderCommands() {
        const commands = [
            { type: 'clickCounter', text: 'Считать клики (за 10 секунд)', emoji: '👆'  },
            { type: 'createShape', text: 'Создать фигуру', emoji: '🔶' },
            { type: 'deleteShape', text: 'Удалить фигуру', emoji: '🔶' },
            { type: 'createTimer', text: 'Запустить таймер', emoji: '⏱️' },
            { type: 'changeColor', text: 'Поменять цвет', emoji: '🌈' },
            { type: 'playSound', text: 'Проиграть звук', emoji: '🎶' },
            { type: 'showMessage', text: 'Вызвать сообщение', emoji: '💬' },
            { type: 'createModule', text: 'Собственный модуль', emoji: '🤖' }
        ];



        commands.forEach(command => {
            let module
            if (command.type === 'createShape') {
                module = new ShapeModule(command.type, command.text, command.emoji);
            } else if (command.type === 'deleteShape') {
                module = new ShapeModule(command.type, command.text, command.emoji, true);
            // } else if (command.type === 'createTimer') {
            //     module = new ShapeModule(command.type, command.text, command.emoji);
            // } else if (command.type === 'changeColor') {
            //     module = new ShapeModule(command.type, command.text, command.emoji);
            // } else if (command.type === 'playSound') {
            //     module = new ShapeModule(command.type, command.text, command.emoji);
            // } else if (command.type === 'showMessage') {
            //     module = new ShapeModule(command.type, command.text, command.emoji);
            } else {
                module = new Module(command.type, command.text, command.emoji);
            }

            this.add(module);
            const item = document.createElement('li');
            if (module.toHTML) {
                item.innerHTML = module.toHTML();
            } else {
                item.textContent = command.text
            }

            item.addEventListener('click', () => this.trigger(module));
            this.menu.appendChild(item);
        });
    }

    close() {
        this.menu.classList.remove('open')
    }

    add(module) {
        this.modules.push(module);
    }

    trigger(module) {
        module.trigger();
        this.close();
    }
}
