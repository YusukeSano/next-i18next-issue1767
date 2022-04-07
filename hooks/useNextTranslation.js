import { useMemo } from "react";
import { useTranslation } from 'next-i18next'

export default function useNextTranslation(namespace, options) {
	const { t, i18n } = useTranslation(namespace, options);
	const T = useMemo(() => t, [i18n]);
	return { t: T, i18n };
}