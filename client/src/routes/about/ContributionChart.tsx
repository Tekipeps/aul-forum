import { ReactElement, FC } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import getPieChartOptions from './ContributionChart.options';

const StyledContributionInfo = styled.div`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.bgtext};
    border-radius: 6px;
    margin: 10;
    white-space: nowrap;
    min-width: 500px;
    width: 500px;
    height: fit-content;
`;

const ContributionChart: FC = (): ReactElement => {
    const DUMMY_DATA = [
        {
            name: 'Koledoye Abidemi',
            y: 52
        },
        {
            name: 'Tekena Solomon',
            y: 54
        },
        {
            name: 'Osinowo Seun',
            y: 5
        },
        {
            name: 'Emmanuel Itighise',
            y: 1
        }
    ];

    const currentTheme = window.localStorage.getItem('theme') || 'light';

    return (
        <StyledContributionInfo>
            <HighchartsReact highcharts={Highcharts} options={getPieChartOptions(DUMMY_DATA, currentTheme)} />
        </StyledContributionInfo>
    );
};

export default ContributionChart;
