import { ThemeType } from '../../theme';

type ContributionDataType =
    | {
          name: string; //{name} represents the name of the contributor
          y: number; //{y} represents the contribution count
      }[]
    | null;

const getPieChartOptions = (contributionData: ContributionDataType, theme: ThemeType) => ({
    chart: {
        backgroundColor: theme.body.bgcolor,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'AUL forum developer contributions chart',
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
            fontWeight: 'bold'
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
            data: contributionData
        }
    ],
    credits: {
        enabled: false
    }
});

export default getPieChartOptions;
