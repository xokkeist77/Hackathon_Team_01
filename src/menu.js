import { Menu } from './core/menu'
import { Module } from './core/module'
import {ShapeModule} from "./modules/shape.module";
import {RandomShape} from "./modules/randomshapes.module";
import {ClicksModule} from "@/modules/clicks.module";
import {SoundModule} from "@/modules/sound.module";

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
            { type: 'clickCounter', text: 'Считать клики (за 3 секунды)', emoji: '👆'  },
            { type: 'createShape', text: 'Создать фигуру', emoji: '🔶' },
            { type: 'createTimer', text: 'Запустить таймер', emoji: '⏱️' },
            { type: 'changeColor', text: 'Поменять цвет', emoji: '🌈' },
            { type: 'playSound', text: 'Проиграть звук', emoji: '🎶' },
            { type: 'showMessage', text: 'Вызвать сообщение', emoji: '💬' },
            { type: 'createModule', text: 'Собственный модуль', emoji: '🤖' }
        ];

        commands.forEach(command => {
            let module
            if (command.type === 'clickCounter') {
                module = new ClicksModule(command.type, command.text, command.emoji);
            } else if (command.type === 'createShape') {
                module = new ShapeModule(command.type, command.text, command.emoji);
            // } else if (command.type === 'createTimer') {
            //     module = new TimerModule(command.type, command.text, command.emoji);
            } else if (command.type === 'changeColor') {
                module = new ClicksModule(command.type, command.text, command.emoji);
            } else if (command.type === 'playSound') {
                module = new SoundModule(command.type, command.text, command.emoji);
            // } else if (command.type === 'showMessage') {
            //     module = new MessageModule(command.type, command.text, command.emoji);
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