import { useMemo } from "react";
import { useTranslation as useNextTranslation } from 'next-i18next'

export default function useTranslation(namespace, options) {
	const { t, i18n } = useNextTranslation(namespace, options);
	const T = useMemo(() => t, [i18n]);
	return { t: T, i18n };
}