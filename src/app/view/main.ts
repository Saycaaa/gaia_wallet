/**
 * @file 入口文件，用于登录，唤起hall界面
 * @author henk<speoth@163.com>
 */

// tslint:disable-next-line:no-any
// tslint:disable-next-line:no-reserved-keywords
declare const module;

import { login, setUrl } from '../../pi/net/ui/con_mgr';
import { open, popNew } from '../../pi/ui/root';
import { Forelet } from '../../pi/widget/forelet';
import { addWidget } from '../../pi/widget/util';
// ============================== 导出

export const forelet = new Forelet();
export const WIDGET_NAME = module.id.replace(/\//g, '-');

export const run = (): void => {
	addWidget(document.body, 'pi-ui-root');
	popNew('app-view-home');
};

// ============================== 立即执行