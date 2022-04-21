/*
 * @Author: hhxy
 * @Date: 2022-04-21 23:14:38
 * @LastEditors: hhxy
 * @LastEditTime: 2022-04-21 23:14:39
 * @Description:
 * @Optimization:
 */
/*
 * @Author: hhxy
 * @Date: 2022-04-13 23:54:06
 * @LastEditors: hhxy
 * @LastEditTime: 2022-04-21 23:10:12
 * @Description:
 * @Optimization:
 */
import MenuItem from './MenuItem';
import ExportModal from './modals/ExportModal';

export default class Menu {
    constructor (main) {
        this.main = main;
        this.menus = {};

        // CREATE MENU Container
        this.el = document.createElement('ul');
        this.el.setAttribute('class', 'ge_menu_bar');

        // NEW
        this.menus.new = new MenuItem(this.el, 'ge_menu', '<i class="material-icons">add</i> 新建', (event) => {
            main.new();
        });



        // OPEN
        this.fileInput = document.createElement('input');
        this.fileInput.setAttribute('type', 'file');
        this.fileInput.setAttribute('accept', 'text/x-yaml');
        this.fileInput.style.display = 'none';
        this.fileInput.addEventListener('change', (event) => {
            main.open(event.target.files[0]);
        });
        this.menus.open = new MenuItem(this.el, 'ge_menu', '<i class="material-icons">folder_open</i>  打开', (event) => {
            this.fileInput.click();
        });

        // this.menus.autoupdate.button.style.color = main.autoupdate ? 'white' : 'gray';
        this.menus.share = new MenuItem(this.el, 'ge_menu', '<i class="material-icons">arrow_upward</i> 导出', (event) => {
            // if (main.change || !this.exportModal) {
            //     this.exportModal = new ExportModal('ge_export', { main: main, position: 'fixed' });
            // }

            // let bbox = this.menus.share.el.getBoundingClientRect();
            // this.exportModal.presentModal(bbox.left - 5, bbox.top + bbox.height + 5);
            main.download()
        });
        // TEST
        this.menus.test = new MenuItem(this.el, 'ge_menu', '<i class="material-icons">timeline</i>测试', (event) => {
            main.visualDebugger.check();
        });

        this.menus.local = new MenuItem(this.el, 'ge_menu', '<i class="material-icons">source</i> 加载缓存', (event) => {
            main.local();
        });



        // AUTOUPDATE

        // 启用localStorage
        this.menus.localStorage = new MenuItem(this.el, 'ge_menu', ' <i class="material-icons">storage</i> 缓存: 关闭', (event) => {
            if (!main.localStorage) {
                main.localStorage = true;
                this.menus.localStorage.name = '<i class="material-icons">storage</i> 缓存: 开启';
                // this.menus.autoupdate.button.style.color = 'gray';
            }
            else {
                main.localStorage = false;
                main.update();
                this.menus.localStorage.name = '<i class="material-icons">storage</i> 缓存: 关闭';
                // this.menus.autoupdate.button.style.color = 'white';
            }
        });
        this.menus.autoupdate = new MenuItem(this.el, 'ge_menu', ' <i class="material-icons">autorenew</i> 更新: 开启', (event) => {
            if (main.autoupdate) {
                main.autoupdate = false;
                this.menus.autoupdate.name = '<i class="material-icons">autorenew</i> 更新: 关闭';
                // this.menus.autoupdate.button.style.color = 'gray';
            }
            else {
                main.autoupdate = true;
                main.update();
                this.menus.autoupdate.name = '<i class="material-icons">autorenew</i> 更新: 开启';
                // this.menus.autoupdate.button.style.color = 'white';
            }
        });

        main.container.appendChild(this.el);
    }
}
