import Arrow from '@/public/icons/arrow.svg';
import BurgerClose from '@/public/icons/burger-close.svg';
import Burger from '@/public/icons/burger.svg';
import Call from '@/public/icons/call.svg';
import Close from '@/public/icons/close.svg';
import Copy from '@/public/icons/content_copy.svg';
import FolderOpen from '@/public/icons/folder-open.svg';
import Folder from '@/public/icons/folder.svg';
import Mail from '@/public/icons/mail.svg';
import Briefcase from '@/public/icons/sections/briefcase.svg';
import BriefcaseFilled from '@/public/icons/sections/filled/briefcase.svg';
import GameFilled from '@/public/icons/sections/filled/game.svg';
import ProfileFilled from '@/public/icons/sections/filled/profile.svg';
import Game from '@/public/icons/sections/game.svg';
import Profile from '@/public/icons/sections/profile.svg';
import Facebook from '@/public/icons/social/facebook.svg';
import Github from '@/public/icons/social/github.svg';
import Instagram from '@/public/icons/social/instagram.svg';
import SolidArrow from '@/public/icons/solid-arrow.svg';
import Translate from '@/public/icons/translate.svg';
import Angular from '@/public/icons/techs/angular.svg';
import Css from '@/public/icons/techs/css.svg';
import Flutter from '@/public/icons/techs/flutter.svg';
import Html from '@/public/icons/techs/html.svg';
import React from '@/public/icons/techs/react.svg';
import JavaScript from '@/public/icons/techs/javascript.svg';
import TypeScript from '@/public/icons/techs/typescript.svg';
import Python from '@/public/icons/techs/python.svg';
import Docker from '@/public/icons/techs/docker.svg';
import Android from '@/public/icons/techs/android.svg';
import SnakeGameArrow from '@/public/icons/snake-game/arrow-button.svg';
import NailUpLeft from '@/public/icons/snake-game/nail-up-left.svg';
import NailUpRight from '@/public/icons/snake-game/nail-up-right.svg';
import NailDownLeft from '@/public/icons/snake-game/nail-down-left.svg';
import NailDownRight from '@/public/icons/snake-game/nail-down-right.svg';
import Food from '@/public/icons/snake-game/food.svg';
import { HTMLProps } from 'react';

export const iconTypes = {
	burgerClose: BurgerClose,
	burger: Burger,
	translate: Translate,
	arrow: Arrow,
	solidArrow: SolidArrow,
	folderOpen: FolderOpen,
	folder: Folder,
	mail: Mail,
	call: Call,
	copy: Copy,
	close: Close,
	snakeGameArrow: SnakeGameArrow,
	nailUpLeft: NailUpLeft,
	nailUpRight: NailUpRight,
	nailDownLeft: NailDownLeft,
	nailDownRight: NailDownRight,
	food: Food,
	// Social icons
	facebook: Facebook,
	instagram: Instagram,
	github: Github,

	// Section icons
	briefcase: Briefcase,
	game: Game,
	profile: Profile,
	'filled-briefcase': BriefcaseFilled,
	'filled-profile': ProfileFilled,
	'filled-game': GameFilled,

	// techs
	angular: Angular,
	css: Css,
	html: Html,
	flutter: Flutter,
	react: React,
	javaScript: JavaScript,
	typeScript: TypeScript,
	python: Python,
	docker: Docker,
	android: Android,
};

const IconComponent = ({
	name,
	className,
}: {
	name: keyof typeof iconTypes;
	className?: HTMLProps<HTMLElement>['className'];
}) => {
	const Icon = iconTypes[name];
	return <Icon className={className} />;
};

export default IconComponent;
