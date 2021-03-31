import { ReactElement, FC } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import getPieChartOptions from './ContributionChart.options';
import getTheme from '../../theme';

const StyledContributionInfo = styled.div`
    padding: 10px;
    border-radius: 6px;
    margin: 10;
    white-space: nowrap;
    min-width: 450px;
    max-width: 600px;
    height: fit-content;
    flex: 1;
`;

const ContributionChart: FC = (): ReactElement => {
    // TODO: replace dummy data with actual data from github's api
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
    const theme = getTheme(currentTheme);

    return (
        <StyledContributionInfo>
            <HighchartsReact highcharts={Highcharts} options={getPieChartOptions(DUMMY_DATA, theme)} />
        </StyledContributionInfo>
    );
};

export default ContributionChart;
