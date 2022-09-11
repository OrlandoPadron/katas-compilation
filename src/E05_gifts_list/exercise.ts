export interface GifList {
	[key: string]: number;
}

const REMOVE_GIFT_SYMBOL = '_';

export function getGiftList(list: string): GifList {
	if (!list) return {};
	const arrayList = list.toLowerCase().replace(/\s+/g, ' ').trim().split(' ');
	const giftsList: GifList = {};
	arrayList.forEach((gift: string) => {
		const isGiftRemoved = gift.charAt(0) === REMOVE_GIFT_SYMBOL;
		if (isGiftRemoved) return;
		if (!giftsList[gift]) {
			giftsList[gift] = 1;
		} else {
			giftsList[gift] += 1;
		}
	});
	return giftsList;
}

// SOLUCIÓN ALTERNATIVA CON REDUCE
export function getGiftListAlt(list: string): GifList {
	if (!list) return {};
	const arrayList = list.toLowerCase().replace(/\s+/g, ' ').trim().split(' ');

	return arrayList.reduce((resultList, currentGift) => {
		const isGiftRemoved = currentGift.charAt(0) === REMOVE_GIFT_SYMBOL;
		if (isGiftRemoved) return resultList;
		if (!resultList[currentGift]) {
			resultList[currentGift] = 1;
			return resultList;
		}
		resultList[currentGift] += 1;
		return resultList;
	}, {} as GifList);
}
