import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.menu = document.getElementById(selector);
        this.renderCommands(); // Создавайте пункты меню только один раз во время создания.
    }

    open() {
        this.menu.classList.add('open')
        this.menu.style.left = event.clientX + 'px';
        this.menu.style.top = event.clientY + 'px';
    }

    renderCommands() {
        const commands = [
            { text: 'Считать клики (за 10 секунд)', emoji: '👆'  },
            { text: 'Создать фигуру', emoji: '🔶' },
            { text: 'Запустить таймер', emoji: '⏱️' },
            { text: 'Поменять цвет', emoji: '🌈' },
            { text: 'Проиграть звук', emoji: '🎶' },
            { text: 'Вызвать сообщение', emoji: '💬' },
            { text: 'Собственный модуль', emoji: '🤖' }
        ];

        commands.forEach(command => {
            const item = document.createElement('li');
            item.className = 'menu-item';
            item.textContent = `${command.text} ${command.emoji}`;
            this.menu.append(item);
        });
    }

    close() {
        this.menu.classList.remove('open')
    }

    add() {
        // TODO document why this method 'add' is empty


    }
}