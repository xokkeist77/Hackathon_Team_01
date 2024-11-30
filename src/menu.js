import { Menu } from './core/menu'
import { Module } from './core/module'
// import {RandomShape} from "@/modules/randomshape";


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
            { type: 'createTimer', text: 'Запустить таймер', emoji: '⏱️' },
            { type: 'changeColor', text: 'Поменять цвет', emoji: '🌈' },
            { type: 'playSound', text: 'Проиграть звук', emoji: '🎶' },
            { type: 'showMessage', text: 'Вызвать сообщение', emoji: '💬' },
            { type: 'createModule', text: 'Собственный модуль', emoji: '🤖' }
        ];

        commands.forEach(command => {
            const module = new Module(command.type, command.text, command.emoji);
            this.add(module);
            const item = document.createElement('li');
            item.innerHTML = module.toHTML();
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