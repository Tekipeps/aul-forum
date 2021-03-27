import getTheme from '../../theme';

type ContributionDataType =
    | {
          name: string; //{name} represents the name of the contributor
          y: number; //{y} represents the contribution count
      }[]
    | null;

const getPieChartOptions = (contributionData: ContributionDataType, currentTheme: string) => ({
    chart: {
        backgroundColor: getTheme(currentTheme).bgcolor,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'AUL forum developer contributions chart',
        style: {
            color: getTheme(currentTheme).home.grey
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
            dataLabels: {
                enabled: false
            },
            showInLegend: true
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
