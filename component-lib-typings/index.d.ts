
declare module '@telia/styleguide' {
    import * as React from 'react';




    interface AlertTextComponent extends React.ComponentClass {}
    export declare const AlertText: AlertTextComponent;





    export interface BoxProps {
    }

    export class Box extends React.Component<BoxProps, any> {
        render(): JSX.Element;

    }




    export type ButtonType = "button" | "reset" | "submit";

    export type ButtonKind = "primary" | "cancel";

    export type ButtonMargin = "top" | "bottom";

    export type ButtonSize = "small";

    export interface ButtonProps {
        /**
         * A button can have a text.
         */
        text?: string;
        type?: ButtonType;
        /**
         * A button can have different appearances e.g. 'primary', 'cancel'.
         */
        kind?: ButtonKind;
        /**
         * One of ['top', 'bottom']
         */
        margin?: ButtonMargin;
        /**
         * A button can have different sizes e.g. 'small'.
         */
        size?: ButtonSize;
        onClick?: (...args: any[])=>any;
        /**
         * Additional classes.
         */
        className?: string;
        /**
         * A button can change text while it is processing.
         */
        processingText?: string;
        /**
         * A button can be in processing state
         */
        isProcessing?: boolean;
        /**
         * A button can be disabled.
         */
        isDisabled?: boolean;
    }


    interface ButtonComponent extends React.ComponentClass<ButtonProps> {}
    export declare const Button: ButtonComponent;






    interface CaptionComponent extends React.ComponentClass {}
    export declare const Caption: CaptionComponent;





    export type ContainerSize = "small" | "medium" | "large";

    export interface ContainerProps {
        size?: ContainerSize;
        noMargin?: boolean;
        noPadding?: boolean;
        noPaddingTop?: boolean;
        extraPaddingTop?: boolean;
        extraMarginBottom?: boolean;
        whiteBg?: boolean;
        overlappingFullWidthImage?: boolean;
    }


    interface ContainerComponent extends React.ComponentClass<ContainerProps> {}
    export declare const Container: ContainerComponent;





    export interface DescriptionListProps {
        /**
         * Pairs of Dt or Dd.
         */
        children?: React.ReactNode;
        /**
         * Whenever should each column contain only two pairs.
         */
        wrapByTwo?: boolean;
    }


    interface DescriptionListComponent extends React.ComponentClass<DescriptionListProps> {}
    export declare const DescriptionList: DescriptionListComponent;






    interface FullWidthTableComponent extends React.ComponentClass {}
    export declare const FullWidthTable: FullWidthTableComponent;






    interface HeadingComponent extends React.ComponentClass {}
    export declare const Heading: HeadingComponent;





    export interface HorizontalRuleProps {
        /**
         * Whenever this should be short or not.
         */
        short?: any;
    }


    interface HorizontalRuleComponent extends React.ComponentClass<HorizontalRuleProps> {}
    export declare const HorizontalRule: HorizontalRuleComponent;





    export type IconLinkKind = "download" | "linkedIn" | "twitter";

    export interface IconLinkProps {
        /**
         * One of 'download', 'linkedIn' or 'twitter'.
         */
        kind?: IconLinkKind;
    }


    interface IconLinkComponent extends React.ComponentClass<IconLinkProps> {}
    export declare const IconLink: IconLinkComponent;






    interface InputErrorComponent extends React.ComponentClass {}
    export declare const InputError: InputErrorComponent;





    export interface LabelProps {
    }

    export class Label extends React.Component<LabelProps, any> {
        render(): JSX.Element;

    }





    interface LinkComponent extends React.ComponentClass {}
    export declare const Link: LinkComponent;





    export interface ListProps {
        /**
         * Additional classes.
         */
        className?: string;
        /**
         * Whenever this should wrap children by 3 per column.
         */
        wrapByThree?: boolean;
        /**
         * Whenever this should wrap children by 4 per column.
         */
        wrapByFour?: boolean;
        /**
         * Whenever should children be black.
         */
        black?: boolean;
    }


    interface ListComponent extends React.ComponentClass<ListProps> {}
    export declare const List: ListComponent;





    export interface NumberBoxesProps {
        /**
         * Zero or more of NumberBoxes.NumberBox
         */
        children?: React.ReactNode;
    }


    interface NumberBoxesComponent extends React.ComponentClass<NumberBoxesProps> {}
    export declare const NumberBoxes: NumberBoxesComponent;






    interface PagePebblesComponent extends React.ComponentClass {}
    export declare const PagePebbles: PagePebblesComponent;





    export type ParagraphKind = "fineprint" | "preamble";

    export interface ParagraphProps {
        /**
         * One of 'fineprint' or 'preamble'.
         */
        kind?: ParagraphKind;
    }


    interface ParagraphComponent extends React.ComponentClass<ParagraphProps> {}
    export declare const Paragraph: ParagraphComponent;





    export interface ProgressBarProps {
        value: number;
        min: number;
        max: number;
        barColor?: string;
        disabled?: boolean;
    }


    interface ProgressBarComponent extends React.ComponentClass<ProgressBarProps> {}
    export declare const ProgressBar: ProgressBarComponent;





    export interface QuoteProps {
        /**
         * Whenever should be inlined in the right side of a text.
         */
        inline?: boolean;
        /**
         * Text of the quote.
         */
        children: string;
        /**
         * Source of the quote.
         */
        source: string;
    }


    interface QuoteComponent extends React.ComponentClass<QuoteProps> {}
    export declare const Quote: QuoteComponent;






    interface ShadowBoxComponent extends React.ComponentClass {}
    export declare const ShadowBox: ShadowBoxComponent;






    interface SpecialMessageComponent extends React.ComponentClass {}
    export declare const SpecialMessage: SpecialMessageComponent;





    export interface SpinnerProps {
        className?: string;
        type?: string;
    }


    interface SpinnerComponent extends React.ComponentClass<SpinnerProps> {}
    export declare const Spinner: SpinnerComponent;





    export interface StepIndicatorProps {
        /**
         * Current active step (index starts at 0)
         */
        index?: number;
        /**
         * Total number of steps
         */
        numberOfSteps?: number;
    }


    interface StepIndicatorComponent extends React.ComponentClass<StepIndicatorProps> {}
    export declare const StepIndicator: StepIndicatorComponent;





    export type TagsChildren = any | any[];

    export type TagsColor = "dark-grey";

    export interface TagsProps {
        /**
         * Additional classes
         */
        className?: string;
        /**
         * Tags.Tag nodes to display.
         */
        children?: TagsChildren;
        /**
         * One of ['dark-grey']
         */
        color?: TagsColor;
    }


    interface TagsComponent extends React.ComponentClass<TagsProps> {}
    export declare const Tags: TagsComponent;





    export interface TelephoneNumberLinkProps {
        /**
         * Formatted telephone number e.g. '+47 924 05 050'
         */
        children: string;
    }


    interface TelephoneNumberLinkComponent extends React.ComponentClass<TelephoneNumberLinkProps> {}
    export declare const TelephoneNumberLink: TelephoneNumberLinkComponent;





    export interface TextAreaProps {
        /**
         * Whenever should this TextArea display as error. Use when input text is not valid.
         */
        error?: boolean;
    }


    interface TextAreaComponent extends React.ComponentClass<TextAreaProps> {}
    export declare const TextArea: TextAreaComponent;





    export interface ToggleButtonProps {
        id: string;
        labelText: string;
        checked?: boolean;
        descriptionText?: string;
    }


    interface ToggleButtonComponent extends React.ComponentClass<ToggleButtonProps> {}
    export declare const ToggleButton: ToggleButtonComponent;





    export interface ToggleSwitchProps {
        active?: any;
        leftLabel?: string;
        rightLabel?: string;
        leftOnClickHandler?: (...args: any[])=>any;
        rightOnClickHandler?: (...args: any[])=>any;
    }


    interface ToggleSwitchComponent extends React.ComponentClass<ToggleSwitchProps> {}
    export declare const ToggleSwitch: ToggleSwitchComponent;





    export interface UniqueSellingPointsProps {
        /**
         * Zero or more of UniqueSellingPoints.Item elements.
         */
        children?: React.ReactNode;
    }


    interface UniqueSellingPointsComponent extends React.ComponentClass<UniqueSellingPointsProps> {}
    export declare const UniqueSellingPoints: UniqueSellingPointsComponent;





    export interface AccordionProps {
    }

    export class Accordion extends React.Component<AccordionProps, any> {
        render(): JSX.Element;

    }




    export interface AccordionListProps {
    }

    export class AccordionList extends React.Component<AccordionListProps, any> {
        render(): JSX.Element;

    }




    export type AlertKind = "positive" | "negative" | "info" | "warning";

    export type AlertSize = "large";

    export interface AlertLinks {
        text?: string;
        url?: string;
    }

    export interface AlertProps {
        kind?: AlertKind;
        size?: AlertSize;
        onOpen?: (...args: any[])=>any;
        onClose?: (...args: any[])=>any;
        isOpen?: boolean;
        minimizedText?: string;
        links?: AlertLinks[];
    }


    interface AlertComponent extends React.ComponentClass<AlertProps> {}
    export declare const Alert: AlertComponent;





    export interface StatefulAlertProps {
    }

    export class StatefulAlert extends React.Component<StatefulAlertProps, any> {
        render(): JSX.Element;

    }




    export interface ArticleMetaDataProps {
        /**
         * Source of icon to use.
         */
        iconSrc?: string;
        /**
         * Array of tags to display.
         */
        tags?: string[];
        /**
         * Formatted date of publishing.
         */
        date: string;
        /**
         * Name of the author, who published the article.
         */
        author: string;
    }


    interface ArticleMetaDataComponent extends React.ComponentClass<ArticleMetaDataProps> {}
    export declare const ArticleMetaData: ArticleMetaDataComponent;





    export interface BelowTheLineOfferProps {
        /**
         * Url to be used when user clicks on the button
         */
        url?: string;
        /**
         * Function to be called when user clicks on the button. Works only if url is not specified.
         */
        onClick?: (...args: any[])=>any;
        /**
         * Function to be called when user closes the offer.
         */
        onClose?: (...args: any[])=>any;
        /**
         * Main text to display.
         */
        text?: string;
        /**
         * Text to display in the button.
         */
        buttonText?: string;
        /**
         * Text to display in header part.
         */
        headerText?: string;
        /**
         * Additional classes.
         */
        className?: string;
    }

    export class BelowTheLineOffer extends React.Component<BelowTheLineOfferProps, any> {
        render(): JSX.Element;

    }





    interface BoxGridComponent extends React.ComponentClass {}
    export declare const BoxGrid: BoxGridComponent;





    export interface CampaignProps {
        headingText: React.ReactNode;
        ingressHtml?: React.ReactNode;
        buttonText: React.ReactNode;
        desktopBackgroundImage: string;
        mobileBackgroundImage: string;
        backgroundImageAltText?: string;
        isUsingWhiteText?: boolean;
        isUsingWhiteContentBox?: boolean;
        children?: React.ReactNode;
    }


    interface CampaignComponent extends React.ComponentClass<CampaignProps> {}
    export declare const Campaign: CampaignComponent;





    export interface ChartLegendSeries {
        title: string;
        color: string;
        value: number;
        total: number;
    }

    export interface ChartLegendProps {
        series?: ChartLegendSeries[];
    }


    interface ChartLegendComponent extends React.ComponentClass<ChartLegendProps> {}
    export declare const ChartLegend: ChartLegendComponent;






    interface CheckBoxWithLabelComponent extends React.ComponentClass {}
    export declare const CheckBoxWithLabel: CheckBoxWithLabelComponent;





    export interface DataBoostChartProps {
        loading?: boolean;
        size?: number;
        loadingCaption?: string;
        upperCaption?: string;
        lowerCaption?: string;
        link?: string;
    }


    interface DataBoostChartComponent extends React.ComponentClass<DataBoostChartProps> {}
    export declare const DataBoostChart: DataBoostChartComponent;






    interface ChartSegmentComponent extends React.ComponentClass {}
    export declare const ChartSegment: ChartSegmentComponent;






    interface ChartSegmentArcComponent extends React.ComponentClass {}
    export declare const ChartSegmentArc: ChartSegmentArcComponent;






    interface ChartSegmentEndCapComponent extends React.ComponentClass {}
    export declare const ChartSegmentEndCap: ChartSegmentEndCapComponent;






    interface ChartSegmentSeparatorComponent extends React.ComponentClass {}
    export declare const ChartSegmentSeparator: ChartSegmentSeparatorComponent;






    interface ChartSegmentStartCapComponent extends React.ComponentClass {}
    export declare const ChartSegmentStartCap: ChartSegmentStartCapComponent;






    interface ChartWrapperComponent extends React.ComponentClass {}
    export declare const ChartWrapper: ChartWrapperComponent;





    export interface DonutChartSegments {
        percent?: any;
        color: string;
    }

    export interface DonutChartThresholds {
        to: number;
        type: string;
    }

    export interface DonutChartProps {
        loading?: boolean;
        size?: number;
        loadingCaption?: string;
        value?: string;
        segments?: DonutChartSegments[];
        valueCaption?: string;
        upperCaption?: string;
        thresholds?: DonutChartThresholds[];
        radius?: number;
        strokeWidthInPercents?: number;
    }


    interface DonutChartComponent extends React.ComponentClass<DonutChartProps> {}
    export declare const DonutChart: DonutChartComponent;





    export interface DownloadButtonsProps {
        /**
         * One or more of DownloadButtons.Button.
         */
        children?: React.ReactNode;
    }


    interface DownloadButtonsComponent extends React.ComponentClass<DownloadButtonsProps> {}
    export declare const DownloadButtons: DownloadButtonsComponent;





    export interface DropDownListWithLabelProps {
    }

    export class DropDownListWithLabel extends React.Component<DropDownListWithLabelProps, any> {
        render(): JSX.Element;

    }




    export interface FactBoxProps {
        /**
         * Text about the fact.
         */
        children: React.ReactNode;
        /**
         * Title of the fact.
         */
        title: string;
        /**
         * Used iff imgSrc is specified.
         */
        imgAlt?: string;
        /**
         * Shows this image iff specified.
         */
        imgSrc?: string;
        /**
         * Shows this icon iff specified
         */
        iconSrc?: string;
    }


    interface FactBoxComponent extends React.ComponentClass<FactBoxProps> {}
    export declare const FactBox: FactBoxComponent;






    interface FocusBoxComponent extends React.ComponentClass {}
    export declare const FocusBox: FocusBoxComponent;





    export interface FocusHeaderProps {
        title: string;
    }


    interface FocusHeaderComponent extends React.ComponentClass<FocusHeaderProps> {}
    export declare const FocusHeader: FocusHeaderComponent;






    interface FocusSpinnerComponent extends React.ComponentClass {}
    export declare const FocusSpinner: FocusSpinnerComponent;





    export interface FullWidthImageProps {
    }


    interface FullWidthImageComponent extends React.ComponentClass<FullWidthImageProps> {}
    export declare const FullWidthImage: FullWidthImageComponent;





    export interface FunkyTabsProps {
        selectedIndex?: number;
        onSelect?: (...args: any[])=>any;
    }


    interface FunkyTabsComponent extends React.ComponentClass<FunkyTabsProps> {}
    export declare const FunkyTabs: FunkyTabsComponent;






    interface HardwareProductComponent extends React.ComponentClass {}
    export declare const HardwareProduct: HardwareProductComponent;






    interface HeaderComponent extends React.ComponentClass {}
    export declare const Header: HeaderComponent;






    interface HeaderWithImageComponent extends React.ComponentClass {}
    export declare const HeaderWithImage: HeaderWithImageComponent;






    interface HeadingLinkComponent extends React.ComponentClass {}
    export declare const HeadingLink: HeadingLinkComponent;





    export interface HeroSources {
        type?: "mobile" | "desktop";
        srcSet?: string;
    }

    export type HeroPebbles = "easter" | "black-friday" | "variant-1" | "variant-2" | "variant-3" | "variant-4";

    export type HeroMode = "mobile" | "desktop";

    export type HeroAlign = "top" | "bottom";

    export interface HeroProps {
        heading: string;
        subheading: string;
        alt: string;
        /**
         * Set of sources.
         */
        sources?: HeroSources[];
        /**
         * One of ['easter', 'black-friday', 'variant-1', 'variant-2', 'variant-3', 'variant-4']
         */
        pebbles?: HeroPebbles;
        /**
         * One of ['mobile', 'desktop']
         */
        mode?: HeroMode;
        /**
         * One of ['top', 'bottom']
         */
        align?: HeroAlign;
    }


    interface HeroComponent extends React.ComponentClass<HeroProps> {}
    export declare const Hero: HeroComponent;





    export type ImageInline = "left" | "right";

    export interface ImageProps {
        inline?: ImageInline;
    }


    interface ImageComponent extends React.ComponentClass<ImageProps> {}
    export declare const Image: ImageComponent;






    interface ImageHeadingLinkComponent extends React.ComponentClass {}
    export declare const ImageHeadingLink: ImageHeadingLinkComponent;





    export type ListWithImageImagePosition = "top" | "bottom";

    export type ListWithImageListPosition = "left" | "right";

    export interface ListWithImageProps {
        /**
         * ListWithImage.Item
         */
        children?: React.ReactNode;
        heading?: string;
        src: string;
        alt: string;
        /**
         * Position of the image on smaller devices.
         */
        imagePosition?: ListWithImageImagePosition;
        /**
         * Position of the list.
         */
        listPosition?: ListWithImageListPosition;
        /**
         * Hides the image on smaller screens.
         */
        hideImageForMobile?: boolean;
    }


    interface ListWithImageComponent extends React.ComponentClass<ListWithImageProps> {}
    export declare const ListWithImage: ListWithImageComponent;






    interface ModalDialogComponent extends React.ComponentClass {}
    export declare const ModalDialog: ModalDialogComponent;






    interface ModalDialogOverlayComponent extends React.ComponentClass {}
    export declare const ModalDialogOverlay: ModalDialogOverlayComponent;





    export interface PageFooterLinks {
        text: string;
        url: string;
    }

    export interface PageFooterSpecialLink {
        text: string;
        url: string;
    }

    export interface PageFooterProps {
        links?: PageFooterLinks[];
        specialLink?: PageFooterSpecialLink;
    }


    interface PageFooterComponent extends React.ComponentClass<PageFooterProps> {}
    export declare const PageFooter: PageFooterComponent;





    export interface PageHeaderProps {
        menuLinks: any[];
        menuId: string;
        isLoggedIn?: boolean;
        showButtons?: boolean;
        cartItemCount: number;
        logoUrl: string;
        logoTitle: string;
        logoImageDesktopPath: string;
        logoImageDesktopPathInverted: string;
    }

    export class PageHeader extends React.Component<PageHeaderProps, any> {
        render(): JSX.Element;

    }





    interface MenuBarComponent extends React.ComponentClass {}
    export declare const MenuBar: MenuBarComponent;






    interface MenuItemComponent extends React.ComponentClass {}
    export declare const MenuItem: MenuItemComponent;






    interface MenuOverlayComponent extends React.ComponentClass {}
    export declare const MenuOverlay: MenuOverlayComponent;






    interface MenuTopPanelComponent extends React.ComponentClass {}
    export declare const MenuTopPanel: MenuTopPanelComponent;






    interface PageMenuComponent extends React.ComponentClass {}
    export declare const PageMenu: PageMenuComponent;






    interface PersonBoxComponent extends React.ComponentClass {}
    export declare const PersonBox: PersonBoxComponent;






    interface PopUpLineComponent extends React.ComponentClass {}
    export declare const PopUpLine: PopUpLineComponent;






    interface PriceTableComponent extends React.ComponentClass {}
    export declare const PriceTable: PriceTableComponent;






    interface ProductListComponent extends React.ComponentClass {}
    export declare const ProductList: ProductListComponent;






    interface ProductPromoBoxComponent extends React.ComponentClass {}
    export declare const ProductPromoBox: ProductPromoBoxComponent;





    export interface ProgressChartThresholds {
        to: number;
        type: string;
    }

    export interface ProgressChartProps {
        loading?: boolean;
        loadingCaption?: string;
        value?: string;
        percent?: any;
        valueCaption?: string;
        thresholds?: ProgressChartThresholds[];
    }


    interface ProgressChartComponent extends React.ComponentClass<ProgressChartProps> {}
    export declare const ProgressChart: ProgressChartComponent;






    interface RadioButtonListComponent extends React.ComponentClass {}
    export declare const RadioButtonList: RadioButtonListComponent;






    interface RadioButtonWithLabelComponent extends React.ComponentClass {}
    export declare const RadioButtonWithLabel: RadioButtonWithLabelComponent;






    interface RecommendedProductsComponent extends React.ComponentClass {}
    export declare const RecommendedProducts: RecommendedProductsComponent;





    export interface ReferencesProps {
        heading: string;
        items: Object[];
    }


    interface ReferencesComponent extends React.ComponentClass<ReferencesProps> {}
    export declare const References: ReferencesComponent;





    export interface RelatedArticleProps {
        /**
         * Source of the image.
         */
        imgSrc: string;
        imgAlt?: string;
        /**
         * The heading text.
         */
        heading: string;
        /**
         * Array of string tags. If you want to pass tags manually, use children and Tags component.
         */
        tags?: string[];
        /**
         * Tags component, or use tags property.
         */
        children?: React.ReactNode;
    }


    interface RelatedArticleComponent extends React.ComponentClass<RelatedArticleProps> {}
    export declare const RelatedArticle: RelatedArticleComponent;





    export interface RelatedArticlesProps {
    }

    export class RelatedArticles extends React.Component<RelatedArticlesProps, any> {
        render(): JSX.Element;

    }




    export interface StepByStepProps {
        /**
         * StepByStep.Step
         */
        children?: React.ReactNode;
        /**
         * Whenever this should be interactive or just static.
         */
        interactive?: boolean;
        /**
         * Index of the active step. Use when you want to handle the state on your own. Start at 0.
         */
        selectedIndex?: number;
        /**
         * Handler func triggered when user clicks the icon. Use when you want to handle the state on your own.
         */
        onSelect?: (...args: any[])=>any;
    }

    export class StepByStep extends React.Component<StepByStepProps, any> {
        render(): JSX.Element;

    }




    export interface SubscriptionProps {
    }

    export class Subscription extends React.Component<SubscriptionProps, any> {
        render(): JSX.Element;

    }




    export interface TabsProps {
        uniqueId?: string;
        selectedIndex?: number;
        onSelect?: (...args: any[])=>any;
    }


    interface TabsComponent extends React.ComponentClass<TabsProps> {}
    export declare const Tabs: TabsComponent;






    interface TextAreaWithLabelComponent extends React.ComponentClass {}
    export declare const TextAreaWithLabel: TextAreaWithLabelComponent;






    interface TextBoxWithLabelComponent extends React.ComponentClass {}
    export declare const TextBoxWithLabel: TextBoxWithLabelComponent;






    interface TooltipComponent extends React.ComponentClass {}
    export declare const Tooltip: TooltipComponent;






    interface UserDashboardComponent extends React.ComponentClass {}
    export declare const UserDashboard: UserDashboardComponent;





    export interface VideoProps {
        src?: string;
        allowFullScreen?: boolean;
    }


    interface VideoComponent extends React.ComponentClass<VideoProps> {}
    export declare const Video: VideoComponent;





    export interface ContentRatingProps {
    }

    export class ContentRating extends React.Component<ContentRatingProps, any> {
        render(): JSX.Element;

    }




    export interface FocusSubscriptionProps {
    }

    export class FocusSubscription extends React.Component<FocusSubscriptionProps, any> {
        render(): JSX.Element;

    }





    interface FormComponent extends React.ComponentClass {}
    export declare const Form: FormComponent;






    interface HardwareProductListComponent extends React.ComponentClass {}
    export declare const HardwareProductList: HardwareProductListComponent;






    interface ThemeBoxComponent extends React.ComponentClass {}
    export declare const ThemeBox: ThemeBoxComponent;






    interface ThemeBoxesComponent extends React.ComponentClass {}
    export declare const ThemeBoxes: ThemeBoxesComponent;






    interface ThemeBoxWithImageComponent extends React.ComponentClass {}
    export declare const ThemeBoxWithImage: ThemeBoxWithImageComponent;



}
