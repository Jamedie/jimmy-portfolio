export type Localized = { fr: string; en: string };

export type I18n = typeof import("../i18n/fr.json");

export type PageKey = {
	[Key in keyof I18n]: I18n[Key] extends {
		page_name: string;
		description: string;
	}
		? Key
		: never;
}[keyof I18n];

export type Project = {
	slug: string;
	year: number;
	featured?: boolean;
	title: Localized;
	description: Localized;
	tech: string[];
	links: { demo?: string; github?: string };
	cover: string;
	icon: string;
};
