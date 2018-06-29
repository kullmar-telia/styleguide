
declare module '@telia/styleguide' {
    import * as React from 'react';
    
interface zz_AlertTextComponent extends React.ComponentClass {}
declare const AlertText: zz_AlertTextComponent;

    export interface BoxProps {
    }
    export class Box extends React.Component<BoxProps, any> {
        render(): JSX.Element;
    }
    type ButtonType = "button" | "reset" | "submit";
    type ButtonKind = "primary" | "cancel";
    type ButtonMargin = "top" | "bottom";
    type ButtonSize = "small";
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
interface zz_ButtonComponent extends React.ComponentClass<ButtonProps> {}
declare const Button: zz_ButtonComponent;

interface zz_CaptionComponent extends React.ComponentClass {}
declare const Caption: zz_CaptionComponent;

    type ContainerSize = "small" | "medium" | "large";
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
interface zz_ContainerComponent extends React.ComponentClass<ContainerProps> {}
declare const Container: zz_ContainerComponent;

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
interface zz_DescriptionListComponent extends React.ComponentClass<DescriptionListProps> {}
declare const DescriptionList: zz_DescriptionListComponent;

interface zz_FullWidthTableComponent extends React.ComponentClass {}
declare const FullWidthTable: zz_FullWidthTableComponent;

interface zz_HeadingComponent extends React.ComponentClass {}
declare const Heading: zz_HeadingComponent;

    export interface HorizontalRuleProps {
        /**
         * Whenever this should be short or not.
         */
        short?: any;
    }
interface zz_HorizontalRuleComponent extends React.ComponentClass<HorizontalRuleProps> {}
declare const HorizontalRule: zz_HorizontalRuleComponent;

    type IconLinkKind = "download" | "linkedIn" | "twitter";
    export interface IconLinkProps {
        /**
         * One of 'download', 'linkedIn' or 'twitter'.
         */
        kind?: IconLinkKind;
    }
interface zz_IconLinkComponent extends React.ComponentClass<IconLinkProps> {}
declare const IconLink: zz_IconLinkComponent;

interface zz_InputErrorComponent extends React.ComponentClass {}
declare const InputError: zz_InputErrorComponent;

    export interface LabelProps {
    }
    export class Label extends React.Component<LabelProps, any> {
        render(): JSX.Element;
    }
interface zz_LinkComponent extends React.ComponentClass {}
declare const Link: zz_LinkComponent;

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
interface zz_ListComponent extends React.ComponentClass<ListProps> {}
declare const List: zz_ListComponent;

    export interface NumberBoxesProps {
        /**
         * Zero or more of NumberBoxes.NumberBox
         */
        children?: React.ReactNode;
    }
interface zz_NumberBoxesComponent extends React.ComponentClass<NumberBoxesProps> {}
declare const NumberBoxes: zz_NumberBoxesComponent;

interface zz_PagePebblesComponent extends React.ComponentClass {}
declare const PagePebbles: zz_PagePebblesComponent;

    type ParagraphKind = "fineprint" | "preamble";
    export interface ParagraphProps {
        /**
         * One of 'fineprint' or 'preamble'.
         */
        kind?: ParagraphKind;
    }
interface zz_ParagraphComponent extends React.ComponentClass<ParagraphProps> {}
declare const Paragraph: zz_ParagraphComponent;

    export interface ProgressBarProps {
        value: number;
        min: number;
        max: number;
        barColor?: string;
        disabled?: boolean;
    }
interface zz_ProgressBarComponent extends React.ComponentClass<ProgressBarProps> {}
declare const ProgressBar: zz_ProgressBarComponent;

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
interface zz_QuoteComponent extends React.ComponentClass<QuoteProps> {}
declare const Quote: zz_QuoteComponent;

interface zz_ShadowBoxComponent extends React.ComponentClass {}
declare const ShadowBox: zz_ShadowBoxComponent;

interface zz_SpecialMessageComponent extends React.ComponentClass {}
declare const SpecialMessage: zz_SpecialMessageComponent;

    export interface SpinnerProps {
        className?: string;
        type?: string;
    }
interface zz_SpinnerComponent extends React.ComponentClass<SpinnerProps> {}
declare const Spinner: zz_SpinnerComponent;

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
interface zz_StepIndicatorComponent extends React.ComponentClass<StepIndicatorProps> {}
declare const StepIndicator: zz_StepIndicatorComponent;

    type TagsChildren = any | any[];
    type TagsColor = "dark-grey";
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
interface zz_TagsComponent extends React.ComponentClass<TagsProps> {}
declare const Tags: zz_TagsComponent;

    export interface TelephoneNumberLinkProps {
        /**
         * Formatted telephone number e.g. '+47 924 05 050'
         */
        children: string;
    }
interface zz_TelephoneNumberLinkComponent extends React.ComponentClass<TelephoneNumberLinkProps> {}
declare const TelephoneNumberLink: zz_TelephoneNumberLinkComponent;

    export interface TextAreaProps {
        /**
         * Whenever should this TextArea display as error. Use when input text is not valid.
         */
        error?: boolean;
    }
interface zz_TextAreaComponent extends React.ComponentClass<TextAreaProps> {}
declare const TextArea: zz_TextAreaComponent;

    export interface ToggleButtonProps {
        id: string;
        labelText: string;
        checked?: boolean;
        descriptionText?: string;
    }
interface zz_ToggleButtonComponent extends React.ComponentClass<ToggleButtonProps> {}
declare const ToggleButton: zz_ToggleButtonComponent;

    export interface ToggleSwitchProps {
        active?: any;
        leftLabel?: string;
        rightLabel?: string;
        leftOnClickHandler?: (...args: any[])=>any;
        rightOnClickHandler?: (...args: any[])=>any;
    }
interface zz_ToggleSwitchComponent extends React.ComponentClass<ToggleSwitchProps> {}
declare const ToggleSwitch: zz_ToggleSwitchComponent;

    export interface UniqueSellingPointsProps {
        /**
         * Zero or more of UniqueSellingPoints.Item elements.
         */
        children?: React.ReactNode;
    }
interface zz_UniqueSellingPointsComponent extends React.ComponentClass<UniqueSellingPointsProps> {}
declare const UniqueSellingPoints: zz_UniqueSellingPointsComponent;

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
    type AlertKind = "positive" | "negative" | "info" | "warning";
    type AlertSize = "large";
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
interface zz_AlertComponent extends React.ComponentClass<AlertProps> {}
declare const Alert: zz_AlertComponent;

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
interface zz_ArticleMetaDataComponent extends React.ComponentClass<ArticleMetaDataProps> {}
declare const ArticleMetaData: zz_ArticleMetaDataComponent;

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
interface zz_BoxGridComponent extends React.ComponentClass {}
declare const BoxGrid: zz_BoxGridComponent;

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
interface zz_CampaignComponent extends React.ComponentClass<CampaignProps> {}
declare const Campaign: zz_CampaignComponent;

    export interface ChartLegendSeries {
        title: string;
        color: string;
        value: number;
        total: number;
    }
    export interface ChartLegendProps {
        series?: ChartLegendSeries[];
    }
interface zz_ChartLegendComponent extends React.ComponentClass<ChartLegendProps> {}
declare const ChartLegend: zz_ChartLegendComponent;

interface zz_CheckBoxWithLabelComponent extends React.ComponentClass {}
declare const CheckBoxWithLabel: zz_CheckBoxWithLabelComponent;

    export interface DataBoostChartProps {
        loading?: boolean;
        size?: number;
        loadingCaption?: string;
        upperCaption?: string;
        lowerCaption?: string;
        link?: string;
    }
interface zz_DataBoostChartComponent extends React.ComponentClass<DataBoostChartProps> {}
declare const DataBoostChart: zz_DataBoostChartComponent;

interface zz_ChartSegmentComponent extends React.ComponentClass {}
declare const ChartSegment: zz_ChartSegmentComponent;

interface zz_ChartSegmentArcComponent extends React.ComponentClass {}
declare const ChartSegmentArc: zz_ChartSegmentArcComponent;

interface zz_ChartSegmentEndCapComponent extends React.ComponentClass {}
declare const ChartSegmentEndCap: zz_ChartSegmentEndCapComponent;

interface zz_ChartSegmentSeparatorComponent extends React.ComponentClass {}
declare const ChartSegmentSeparator: zz_ChartSegmentSeparatorComponent;

interface zz_ChartSegmentStartCapComponent extends React.ComponentClass {}
declare const ChartSegmentStartCap: zz_ChartSegmentStartCapComponent;

interface zz_ChartWrapperComponent extends React.ComponentClass {}
declare const ChartWrapper: zz_ChartWrapperComponent;

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
interface zz_DonutChartComponent extends React.ComponentClass<DonutChartProps> {}
declare const DonutChart: zz_DonutChartComponent;

    export interface DownloadButtonsProps {
        /**
         * One or more of DownloadButtons.Button.
         */
        children?: React.ReactNode;
    }
interface zz_DownloadButtonsComponent extends React.ComponentClass<DownloadButtonsProps> {}
declare const DownloadButtons: zz_DownloadButtonsComponent;

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
interface zz_FactBoxComponent extends React.ComponentClass<FactBoxProps> {}
declare const FactBox: zz_FactBoxComponent;

interface zz_FocusBoxComponent extends React.ComponentClass {}
declare const FocusBox: zz_FocusBoxComponent;

    export interface FocusHeaderProps {
        title: string;
    }
interface zz_FocusHeaderComponent extends React.ComponentClass<FocusHeaderProps> {}
declare const FocusHeader: zz_FocusHeaderComponent;

interface zz_FocusSpinnerComponent extends React.ComponentClass {}
declare const FocusSpinner: zz_FocusSpinnerComponent;

    export interface FullWidthImageProps {
    }
interface zz_FullWidthImageComponent extends React.ComponentClass<FullWidthImageProps> {}
declare const FullWidthImage: zz_FullWidthImageComponent;

    export interface FunkyTabsProps {
        selectedIndex?: number;
        onSelect?: (...args: any[])=>any;
    }
interface zz_FunkyTabsComponent extends React.ComponentClass<FunkyTabsProps> {}
declare const FunkyTabs: zz_FunkyTabsComponent;

interface zz_HardwareProductComponent extends React.ComponentClass {}
declare const HardwareProduct: zz_HardwareProductComponent;

interface zz_HeaderComponent extends React.ComponentClass {}
declare const Header: zz_HeaderComponent;

interface zz_HeaderWithImageComponent extends React.ComponentClass {}
declare const HeaderWithImage: zz_HeaderWithImageComponent;

interface zz_HeadingLinkComponent extends React.ComponentClass {}
declare const HeadingLink: zz_HeadingLinkComponent;

    export interface HeroSources {
        type?: "mobile" | "desktop";
        srcSet?: string;
    }
    type HeroPebbles = "easter" | "black-friday" | "variant-1" | "variant-2" | "variant-3" | "variant-4";
    type HeroMode = "mobile" | "desktop";
    type HeroAlign = "top" | "bottom";
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
interface zz_HeroComponent extends React.ComponentClass<HeroProps> {}
declare const Hero: zz_HeroComponent;

    type ImageInline = "left" | "right";
    export interface ImageProps {
        inline?: ImageInline;
    }
interface zz_ImageComponent extends React.ComponentClass<ImageProps> {}
declare const Image: zz_ImageComponent;

interface zz_ImageHeadingLinkComponent extends React.ComponentClass {}
declare const ImageHeadingLink: zz_ImageHeadingLinkComponent;

    type ListWithImageImagePosition = "top" | "bottom";
    type ListWithImageListPosition = "left" | "right";
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
interface zz_ListWithImageComponent extends React.ComponentClass<ListWithImageProps> {}
declare const ListWithImage: zz_ListWithImageComponent;

interface zz_ModalDialogComponent extends React.ComponentClass {}
declare const ModalDialog: zz_ModalDialogComponent;

interface zz_ModalDialogOverlayComponent extends React.ComponentClass {}
declare const ModalDialogOverlay: zz_ModalDialogOverlayComponent;

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
interface zz_PageFooterComponent extends React.ComponentClass<PageFooterProps> {}
declare const PageFooter: zz_PageFooterComponent;

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
interface zz_MenuBarComponent extends React.ComponentClass {}
declare const MenuBar: zz_MenuBarComponent;

interface zz_MenuItemComponent extends React.ComponentClass {}
declare const MenuItem: zz_MenuItemComponent;

interface zz_MenuOverlayComponent extends React.ComponentClass {}
declare const MenuOverlay: zz_MenuOverlayComponent;

interface zz_MenuTopPanelComponent extends React.ComponentClass {}
declare const MenuTopPanel: zz_MenuTopPanelComponent;

interface zz_PageMenuComponent extends React.ComponentClass {}
declare const PageMenu: zz_PageMenuComponent;

interface zz_PersonBoxComponent extends React.ComponentClass {}
declare const PersonBox: zz_PersonBoxComponent;

interface zz_PopUpLineComponent extends React.ComponentClass {}
declare const PopUpLine: zz_PopUpLineComponent;

interface zz_PriceTableComponent extends React.ComponentClass {}
declare const PriceTable: zz_PriceTableComponent;

interface zz_ProductListComponent extends React.ComponentClass {}
declare const ProductList: zz_ProductListComponent;

interface zz_ProductPromoBoxComponent extends React.ComponentClass {}
declare const ProductPromoBox: zz_ProductPromoBoxComponent;

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
interface zz_ProgressChartComponent extends React.ComponentClass<ProgressChartProps> {}
declare const ProgressChart: zz_ProgressChartComponent;

interface zz_RadioButtonListComponent extends React.ComponentClass {}
declare const RadioButtonList: zz_RadioButtonListComponent;

interface zz_RadioButtonWithLabelComponent extends React.ComponentClass {}
declare const RadioButtonWithLabel: zz_RadioButtonWithLabelComponent;

interface zz_RecommendedProductsComponent extends React.ComponentClass {}
declare const RecommendedProducts: zz_RecommendedProductsComponent;

    export interface ReferencesProps {
        heading: string;
        items: Object[];
    }
interface zz_ReferencesComponent extends React.ComponentClass<ReferencesProps> {}
declare const References: zz_ReferencesComponent;

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
interface zz_RelatedArticleComponent extends React.ComponentClass<RelatedArticleProps> {}
declare const RelatedArticle: zz_RelatedArticleComponent;

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
interface zz_TabsComponent extends React.ComponentClass<TabsProps> {}
declare const Tabs: zz_TabsComponent;

interface zz_TextAreaWithLabelComponent extends React.ComponentClass {}
declare const TextAreaWithLabel: zz_TextAreaWithLabelComponent;

interface zz_TextBoxWithLabelComponent extends React.ComponentClass {}
declare const TextBoxWithLabel: zz_TextBoxWithLabelComponent;

interface zz_TooltipComponent extends React.ComponentClass {}
declare const Tooltip: zz_TooltipComponent;

interface zz_UserDashboardComponent extends React.ComponentClass {}
declare const UserDashboard: zz_UserDashboardComponent;

    export interface VideoProps {
        src?: string;
        allowFullScreen?: boolean;
    }
interface zz_VideoComponent extends React.ComponentClass<VideoProps> {}
declare const Video: zz_VideoComponent;

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
interface zz_FormComponent extends React.ComponentClass {}
declare const Form: zz_FormComponent;

interface zz_HardwareProductListComponent extends React.ComponentClass {}
declare const HardwareProductList: zz_HardwareProductListComponent;

interface zz_ThemeBoxComponent extends React.ComponentClass {}
declare const ThemeBox: zz_ThemeBoxComponent;

interface zz_ThemeBoxesComponent extends React.ComponentClass {}
declare const ThemeBoxes: zz_ThemeBoxesComponent;

interface zz_ThemeBoxWithImageComponent extends React.ComponentClass {}
declare const ThemeBoxWithImage: zz_ThemeBoxWithImageComponent;


}
