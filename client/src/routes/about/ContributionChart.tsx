import { ReactElement, FC, useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import getPieChartOptions from './ContributionChart.options';
import getTheme from '../../theme';

const StyledContributionInfo = styled.div`
    padding: 10px;
    border-radius: 6px;
    white-space: nowrap;
    min-width: 200px;
    max-width: 400px;
    height: fit-content;
    flex: 1;
`;
interface ContributorType {
    name: string;
    y: number;
}
const ContributionChart: FC = (): ReactElement => {
    const [contributors, setContributors] = useState<ContributorType[]>([]);
    useEffect(() => {
        const fetchContributors = async () => {
            const res = await fetch('https://api.github.com/repos/Tekipeps/aul-forum/contributors');
            return res.json();
        };
        const contribData = window.localStorage.getItem('contributors');
        const dataIsExpired = contribData ? new Date().getTime() - new Date(JSON.parse(contribData).time).getTime() > 1000 * 60 * 60 : true;
        if (contribData && !dataIsExpired) {
            setContributors(JSON.parse(contribData).contributors);
        } else {
            fetchContributors()
                .then((arr: any[]) =>
                    arr.reduce((acc, curr) => {
                        const obj = { name: curr.login, y: curr.contributions };
                        return [...acc, obj];
                    }, [])
                )
                .then((arr: ContributorType[]) => {
                    setContributors(arr);
                    window.localStorage.setItem('contributors', JSON.stringify({ contributors: arr, time: new Date().getTime() }));
                });
        }
    }, []);

    const currentTheme = window.localStorage.getItem('theme') || 'light';
    const theme = getTheme(currentTheme);

    return (
        <StyledContributionInfo>
            <HighchartsReact highcharts={Highcharts} options={getPieChartOptions(contributors, theme)} />
        </StyledContributionInfo>
    );
};

export default ContributionChart;
