import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({
                namespace: 'free-consultation-call'
            });
            cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
        })();
    }, []);
    return (
        <Cal
            namespace="free-consultation-call"
            calLink="trunal-tarun/free-consultation-call"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
        />
    );
}
