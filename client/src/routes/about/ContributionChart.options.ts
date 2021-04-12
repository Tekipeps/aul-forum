import { Options } from 'highcharts';
import { ThemeType } from '../../theme';

type ContributionDataType =
    | {
          name: string; //{name} represents the name of the contributor
          y: number; //{y} represents the contribution count
      }[]
    | undefined;

const getPieChartOptions = (contributionData: ContributionDataType, theme: ThemeType): Options => ({
    chart: {
        backgroundColor: theme.body.bgcolor,
        height: 450
    },
    title: {
        text: 'Developer contributions chart',
        style: {
            color: theme.body.color
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        itemStyle: {
            color: theme.body.color,
            fontWeight: '400'
        },
        itemHoverStyle: {
            color: theme.home.grey,
            cursor: 'pointer'
        }
    },
    series: [
        {
            name: 'Contribution percentage',
            colorByPoint: true,
            data: contributionData,
            type: 'pie'
        }
    ],
    credits: {
        enabled: false
    }
});

export default getPieChartOptions;
