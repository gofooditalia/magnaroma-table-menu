# 📸 Come Inserire le Tue Foto dei Piatti

## Quick Start

1. **Prepara le foto**
   - Formato: JPG, PNG o WebP
   - Dimensione ottimale: 1200px larghezza
   - Aspect ratio: 4:3 o 16:9
   - Qualità alta ma compressa (max 300-500KB per foto)

2. **Rinomina i file**
   
   Usa questi nomi ESATTI (minuscole, con trattino):
   
   ### Antipasti
   - `suppli.jpg` - Supplì al Telefono
   - `bruschette.jpg` - Bruschette Miste
   - `fiori-zucca.jpg` - Fiori di Zucca Fritti
   
   ### Primi
   - `carbonara.jpg` - Carbonara
   - `amatriciana.jpg` - Amatriciana
   - `cacio-pepe.jpg` - Cacio e Pepe
   - `gricia.jpg` - Gricia
   
   ### Secondi
   - `saltimbocca.jpg` - Saltimbocca alla Romana
   - `coda-vaccinara.jpg` - Coda alla Vaccinara
   - `abbacchio.jpg` - Abbacchio alla Scottadito
   
   ### Pinse
   - `pinsa-margherita.jpg` - Pinsa Margherita
   - `pinsa-mortadella.jpg` - Pinsa Mortadella e Pistacchio
   
   ### Contorni
   - `cicoria.jpg` - Cicoria Ripassata
   - `patate-forno.jpg` - Patate al Forno
   
   ### Dolci
   - `tiramisu.jpg` - Tiramisù
   - `panna-cotta.jpg` - Panna Cotta
   
   ### Bevande
   - `acqua.jpg` - Acqua
   - `vino-casa.jpg` - Vino della Casa
   - `birra.jpg` - Birra alla Spina

3. **Carica le foto**
   
   Sostituisci i file placeholder in:
   ```
   public/images/dishes/
   ```
   
   Copia semplicemente le tue foto in questa cartella, sovrascrivendo i placeholder esistenti.

4. **Verifica**
   
   ```bash
   npm run dev
   ```
   
   Apri http://localhost:3000 e controlla che le immagini siano visualizzate correttamente.

## Ottimizzazione Foto (Consigliato)

### Online (Gratis)

1. **[TinyPNG](https://tinypng.com/)** o **[TinyJPG](https://tinyjpg.com/)**
   - Comprimi senza perdita visibile di qualità
   - Riduci file size del 60-80%

2. **[Squoosh](https://squoosh.app/)** (by Google)
   - Converti in WebP
   - Regola qualità manualmente
   - Confronta prima/dopo

### Desktop Tools

- **macOS**: Preview (Esporta → Riduci dimensioni)
- **Windows**: Paint 3D o IrfanView
- **Linux**: GIMP

### Comandi da Terminale

Se hai ImageMagick installato:

```bash
# Ridimensiona tutte le foto a 1200px width
cd public/images/dishes
for img in *.jpg; do
  convert "$img" -resize 1200x -quality 85 "optimized-$img"
done
```

Per convertire in WebP:

```bash
# Converti JPG in WebP
for img in *.jpg; do
  cwebp -q 85 "$img" -o "${img%.jpg}.webp"
done
```

## Best Practices per le Foto

### ✅ Cosa Fare

- **Luce naturale**: Foto con buona illuminazione
- **Piatto al centro**: Focus sul cibo
- **Sfondo pulito**: Tavolo, piatto, niente disordine
- **Colori vivaci**: Fai risaltare gli ingredienti
- **Angolazione 45°**: La più appetitosa per food photography

### ❌ Cosa Evitare

- Foto sfocate o mosse
- Illuminazione scarsa o ombre dure
- Piatti mezzi vuoti
- Troppi elementi nella foto
- Flash diretto (fa sembrare il cibo poco appetitoso)

## Tips per Food Photography

1. **Usa la luce naturale vicino a una finestra**
2. **Aggiungi contesto**: Ingredienti freschi, tovaglietta, posate eleganti
3. **Regola il bilanciamento del bianco**: Il cibo deve sembrare fresco
4. **Scatta da diverse angolazioni**: 
   - 45° per piatti fondi (pasta, zuppe)
   - Dall'alto per pinse, bruschette
   - Laterale per dolci e dessert

## Formato Consigliato

Per migliori performance:

1. **Scatta**: JPG o RAW dalla fotocamera
2. **Modifica**: Luminosità, contrasto, saturazione leggera
3. **Ridimensiona**: 1200px larghezza
4. **Comprimi**: 85% qualità JPG
5. **Converti**: WebP per web (opzionale, Next.js lo fa automaticamente)

## Troubleshooting

### Le foto non si vedono

- Verifica che i nomi file siano ESATTAMENTE come indicato (minuscole!)
- Controlla che siano nella cartella giusta: `public/images/dishes/`
- Riavvia il server: `npm run dev`

### Le foto sono lente a caricare

- Comprimi con TinyPNG
- Riduci dimensioni a max 1200px width
- Usa format WebP

### Le foto sembrano tagliate

- Usa aspect ratio 4:3 (es: 1200x900px)
- Oppure 16:9 (es: 1200x675px)
- Evita foto verticali

## Esempio Workflow Completo

```bash
# 1. Scarica le tue foto sul computer

# 2. Rinominale secondo la lista sopra

# 3. Ottimizza con TinyPNG (drag & drop online)

# 4. Copia nella cartella del progetto
cp ~/Download/foto-ottimizzate/* public/images/dishes/

# 5. Verifica
npm run dev
# Apri http://localhost:3000

# 6. Se tutto ok, fai commit e deploy
git add public/images/dishes/
git commit -m "Aggiunte foto professionali dei piatti"
git push
# Vercel/Netlify deployano automaticamente
```

## Need Help?

Se hai problemi con le foto, contatta il team di sviluppo o consulta il README.md principale.

---

**Buon appetito! 📸🍝**

