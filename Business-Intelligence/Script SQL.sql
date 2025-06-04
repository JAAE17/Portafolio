CREATE TABLE "Maestro de tiendas" (
    "Country Code" VARCHAR(10),
    "Global Location Number" VARCHAR(50),
    "Pais" VARCHAR(50),
    "Store Nbr" INT PRIMARY KEY,
    "Store Name" VARCHAR(100),
    "Formato" VARCHAR(50),
    "Ciudad" VARCHAR(50),
    "Cod ISO" VARCHAR(10),
    "Financial Rpt Code" VARCHAR(20),
    "Mailing Postal Code" VARCHAR(20),
    "Size (Sq Ft)" INT,
    "Open Date" DATE,
    "Codigo Tienda" VARCHAR(50),
    "Region" VARCHAR(50),
    "Region.1" VARCHAR(50),
    "Coordenadas" VARCHAR(100),
    "Latitud" DECIMAL(10, 6),
    "Longitud" DECIMAL(10, 6),
    "Zona" VARCHAR(50)
);

CREATE TABLE "Maestro de productos" (
    "UPC" VARCHAR(50),
    "Vendor Stk Nbr" VARCHAR(50),
    "Item Nbr" VARCHAR(50) PRIMARY KEY,
    "Item Type" VARCHAR(50),
    "Item Sub Type" VARCHAR(50),
    "Signing Desc" VARCHAR(100),
    "Dept Category Description" VARCHAR(100),
    "Category" VARCHAR(50),
    "Subcategory" VARCHAR(50),
    "Segment" VARCHAR(50),
    "Subsegment" VARCHAR(50)
);

CREATE TABLE "Abasto" (
    "Country Code" VARCHAR(10),
    "UPC" VARCHAR(50),
    "Item Nbr" VARCHAR(50),
    "Item Type" VARCHAR(50),
    "Item Sub Type" VARCHAR(50),
    "Curr Traited Store/Item Comb" VARCHAR(50),
    "Curr Valid Store/Item Comb" VARCHAR(50),
    "Curr Item MBM Code" VARCHAR(50),
    "Signing Desc" VARCHAR(100),
    "Store Specific Retail" DECIMAL(10, 2),
    "Store Specific Retail US Dollars" DECIMAL(10, 2),
    "Store Specific Cost" DECIMAL(10, 2),
    "Store Specific Cost US Dollars" DECIMAL(10, 2),
    "WHPK Qty" INT,
    "VNPK Qty" INT,
    "Store Nbr" INT,
    "Store Name" VARCHAR(100),
    "Accounting Comp Flag" BOOLEAN,
    "Avg Str DD(Rate of Sale)" DECIMAL(10, 2),
    "POS Qty" INT,
    "Curr Str On Hand Qty" INT,
    "Curr Str In Transit Qty" INT,
    "Curr Str In Whse Qty" INT,
    "Curr Str On Order Qty" INT,
    "Curr Whse On Hand Qty" INT,
    "Max Shelf Qty" INT,
    "MU %" DECIMAL(5, 2),
    "Acct Dept Nbr" VARCHAR(50),
    "Brand Desc" VARCHAR(100),
    "Week +1 Forecast" DECIMAL(10, 2),
    "Week +2 Forecast" DECIMAL(10, 2),
    "Week +3 Forecast" DECIMAL(10, 2),
    "Week +4 Forecast" DECIMAL(10, 2)
);

CREATE TABLE "Fill Rate" (
    "Country Code" VARCHAR(10),
    "UPC" VARCHAR(50),
    "Item Nbr" VARCHAR(50),
    "Item Type" VARCHAR(50),
    "Item Sub Type" VARCHAR(50),
    "Unit Retail" DECIMAL(10, 2),
    "Unit Retail USD" DECIMAL(10, 2),
    "Unit Cost" DECIMAL(10, 2),
    "Unit Cost USD" DECIMAL(10, 2),
    "Signing Desc" VARCHAR(100),
    "Current Item MBM Code" VARCHAR(50),
    "WHPK Qty" INT,
    "VNPK Qty" INT,
    "whse Qty Ordered" INT,
    "whse Qty Received" INT,
    "PO Type" VARCHAR(50),
    "PO Event" VARCHAR(50),
    "PO Number" VARCHAR(50),
    "PO Cancel Date" DATE,
    "PO Create Date" DATE
);

CREATE TABLE "Mensual" (
    "Country Code" VARCHAR(10),
    "UPC" VARCHAR(50),
    "Item Nbr" VARCHAR(50),
    "Item Type" VARCHAR(50),
    "Item Sub Type" VARCHAR(50),
    "Signing Desc" VARCHAR(100),
    "WHPK Qty" INT,
    "VNPK Qty" INT,
    "Store Specific Retail" DECIMAL(10, 2),
    "Store Specific Retail US Dollars" DECIMAL(10, 2),
    "Store Specific Cost" DECIMAL(10, 2),
    "Store Specific Cost US Dollars" DECIMAL(10, 2),
    "Store Nbr" INT,
    "Store Name" VARCHAR(100),
    "Accounting Comp Flag" BOOLEAN,
    "Range 1 POS Qty" INT,
    "Range 1 POS Sales" DECIMAL(10, 2),
    "Range 1 POS Sales US Dollars" DECIMAL(10, 2),
    "Range 1 POS Cost" DECIMAL(10, 2),
    "Range 1 POS Cost US Dollars" DECIMAL(10, 2),
    "Date" DATE,
    "Mes" INT,
    "Ano" INT
);

CREATE TABLE "Semanal" (
    "Country Code" VARCHAR(10),
    "UPC" VARCHAR(50),
    "Item Nbr" VARCHAR(50),
    "Store Nbr" INT,
    "Store Name" VARCHAR(100),
    "POS Qty" INT,
    "POS Cost" DECIMAL(10, 2),
    "POS Cost US Dollars" DECIMAL(10, 2),
    "POS Sales" DECIMAL(10, 2),
    "POS Sales US Dollars" DECIMAL(10, 2),
    "WM Week" INT,
    "Financial Rpt Code" VARCHAR(50)
);




