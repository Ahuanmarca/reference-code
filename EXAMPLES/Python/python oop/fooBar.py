def myFunction():
    print(__name__)

def main():
    myFunction()


# ESTAS CONDICIONES SE CHEQUEAN AL EJECUTAR EL SCRIPT,
# PERO TAMBIËN SE CHEQUEAN AL IMPORTARLO !!!!!


#   Esta se cumple al ejecutar directamente el script,
#   ya que __name__ se define como __main__
if __name__ == '__main__':
    print('__name__ is __main__')
    main()

#   Esta se cumple al importar el script, 
#   ya que __name__ se define como 'fooBar'
if __name__ == 'fooBar':
    print('__name__ is fooBar')
    # main()
