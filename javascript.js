function proses()
{
    var buah = document.getElementById('buah').value;
    var kilo = document.getElementById('kilo').value;
    var diskon = document.getElementById('diskon').value;

    total(buah, kilo, diskon);
}

function total(buah, kilo, diskon)
{
    var hargaBuah = getHargaBuah(buah);
    document.getElementById('total').innerHTML = ("Jenis buah : " + buah + "<br>");
    document.getElementById('total').innerHTML += ("Harga buah/kg : Rp" + hargaBuah + "<br>");
    document.getElementById('total').innerHTML += ("Jumlah kg : " + kilo + "kg<br>");
    document.getElementById('total').innerHTML += ("Potongan diskon : " + diskon + "%<br>");
    document.getElementById('total').innerHTML += ("Besar diskon : Rp" + (diskon/100) * (hargaBuah * kilo) + "<br>");
    document.getElementById('total').innerHTML += ("<br>Sub total : Rp" + (hargaBuah * kilo) + "<br>");
    document.getElementById('total').innerHTML += ("Total : Rp" + ((hargaBuah * kilo) - (diskon/100) * (hargaBuah * kilo)) );
}

function getHargaBuah(buah)
{
    var hargaBuah;
    if (buah == 'Apel')
    {
        hargaBuah = 20000;
    }
    else if (buah == 'Alpukat')
    {
        hargaBuah = 30000;
    }
    else if (buah == 'Stroberi')
    {
        hargaBuah = 15000;
    }
    else if (buah == 'Semangka')
    {
        hargaBuah = 6000;
    }
    else if (buah == 'Mangga')
    {
        hargaBuah = 10000;
    }
    else if (buah == 'Kiwi')
    {
        hargaBuah = 40000;
    }			
    return hargaBuah;
}

